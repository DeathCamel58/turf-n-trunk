export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-sage-light border-t-forest" />
        <span className="text-sm text-slate">Loading...</span>
      </div>
    </div>
  );
}
