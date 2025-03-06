import { ArrowUpRight } from 'lucide-react';

export function DemoButton() {
  return (
    <button className="bg-[#F4845F] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#E77A55] transition-colors shadow-lg hover:shadow-xl z-10">
      Book a Demo
      <ArrowUpRight size={20} />
    </button>
  );
}