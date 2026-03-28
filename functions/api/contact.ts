interface Env {
  RECAPTCHA_SECRET_KEY: string;
  ESPOCRM_API_URL: string;
}

interface ContactPayload {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber?: string;
  addressStreet?: string;
  addressCity?: string;
  description?: string;
  recaptchaToken: string;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { RECAPTCHA_SECRET_KEY, ESPOCRM_API_URL } = context.env;

  if (!RECAPTCHA_SECRET_KEY || !ESPOCRM_API_URL) {
    return Response.json(
      { error: "Server configuration error." },
      { status: 500, headers: CORS_HEADERS }
    );
  }

  let body: ContactPayload;
  try {
    body = await context.request.json();
  } catch {
    return Response.json(
      { error: "Invalid request body." },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  // Validate required fields
  if (!body.firstName || !body.lastName || !body.emailAddress || !body.recaptchaToken) {
    return Response.json(
      { error: "Missing required fields." },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  // Verify reCAPTCHA v2
  const recaptchaResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: body.recaptchaToken,
      }),
    }
  );

  const recaptchaResult = await recaptchaResponse.json<{
    success: boolean;
    "error-codes"?: string[];
  }>();

  if (!recaptchaResult.success) {
    return Response.json(
      { error: "reCAPTCHA verification failed. Please try again." },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  // Forward to EspoCRM
  const espoPayload = {
    firstName: body.firstName,
    lastName: body.lastName,
    emailAddress: body.emailAddress,
    phoneNumber: body.phoneNumber || "",
    addressStreet: body.addressStreet || "",
    addressCity: body.addressCity || "",
    description: body.description || "",
  };

  const espoResponse = await fetch(ESPOCRM_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(espoPayload),
  });

  if (!espoResponse.ok) {
    return Response.json(
      { error: "Failed to submit your request. Please try again later." },
      { status: 502, headers: CORS_HEADERS }
    );
  }

  return Response.json(
    { success: true },
    { status: 200, headers: CORS_HEADERS }
  );
};
