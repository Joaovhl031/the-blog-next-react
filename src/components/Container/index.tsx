type containerProps = {
  children: React.ReactNode;
};

export function Container({ children }: containerProps) {
  return (
    <div className="text-slate-900 bg-slate-200 min-h-screen dark:bg-slate-900 dark:text-slate-100 p-8">
      <div className="max-w-5xl mx-auto px">
        {children}
      </div>
    </div>
  );
}
