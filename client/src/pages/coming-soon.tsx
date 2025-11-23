import { Clock } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="p-4 bg-primary/10 rounded-full">
            <Clock className="w-16 h-16 text-primary" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400">
            We're working hard to bring you something amazing.
          </p>
        </div>

        <div className="pt-8">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Stay tuned for updates
          </p>
        </div>
      </div>
    </div>
  );
}
