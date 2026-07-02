"use client";

import { OrgNode } from "@/lib/idariYapiData";

interface Props {
  node: OrgNode;
}

export default function OrgChart({ node }: Props) {
  return (
    <div className="w-full overflow-auto">
      <div className="min-w-max flex justify-center py-10 scale-[0.9] origin-top">
        
        {/* ROOT */}
        <div className="flex flex-col items-center">
          
          <div className="px-6 py-3 rounded-xl bg-[#009FE3] text-white font-semibold shadow-md">
            {node.title}
          </div>

          {node.children && node.children.length > 0 && (
            <>
              <div className="w-px h-10 bg-gray-300" />

              <div className="flex gap-10 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gray-300" />

                {node.children.map((child) => (
                  <div key={child.id} className="flex flex-col items-center">
                    
                    <div className="w-px h-10 bg-gray-300" />

                    <div className="px-4 py-2 rounded-lg bg-white border shadow-sm text-sm min-w-[200px] text-center">
                      {child.title}
                    </div>

                    {child.children && (
                      <div className="mt-6">
                        <OrgChart node={child} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}