import { File, Folder, Tree } from "@/components/magicui/file-tree";
import { GraduationCap, Briefcase, Landmark } from "lucide-react";

// Experience & Education Section
export function ExperienceTreeDemo() {
  return (
    <div className="h-full">
      <Tree
        initialExpandedItems={[
          "education",
          "uottawa",
          "masters",
          "bachelors",
          "experience",
          "mitel",
          "mitel-2022",
          "mitel-2021",
          "transport-canada",
          "transport-canada-2021",
        ]}
      >
        <Folder element="Education" value="education">
          <Folder element="University of Ottawa" value="uottawa">
            <File
              value="masters"
              fileIcon={
                <GraduationCap className="w-5 h-5 text-[#2d2d2c] dark:text-[#8f001a]" />
              }
            >
              <div className="text-left ml-1">
                MEng Electrical & Computer Engineering
              </div>
            </File>
            <File
              value="bachelors"
              fileIcon={
                <GraduationCap className="w-5 h-5 text-[#2d2d2c] dark:text-[#8f001a]" />
              }
            >
              <div className="text-left ml-1">BASc Computer Engineering</div>
            </File>
          </Folder>
        </Folder>
        <Folder element="Experience" value="experience">
          <Folder element="Mitel Networks Corporation" value="mitel">
            <File
              value="mitel-2022"
              fileIcon={
                <Briefcase className="w-5 h-5 text-[#0d4496] dark:text-[#00A1F4]" />
              }
            >
              <div className="text-left ml-1">
                Software Developer Co-op
                <br />
                <div className="text-slate-600 dark:text-slate-300">
                  May 2022 - Aug 2022
                </div>
              </div>
            </File>
            <File
              value="mitel-2021"
              fileIcon={
                <Briefcase className="w-5 h-5 text-[#0d4496] dark:text-[#00A1F4]" />
              }
            >
              <div className="text-left ml-1">
                Software Developer Co-op
                <br />
                <div className="text-slate-600 dark:text-slate-300">
                  Sept 2021 - Dec 2021
                </div>
              </div>
            </File>
          </Folder>
          <Folder element="Transport Canada" value="transport-canada">
            <File
              value="transport-canada-2021"
              fileIcon={
                <Landmark className="w-5 h-5 text-[#EB2D37] dark:text-white" />
              }
            >
              <div className="text-left ml-2">
                Application Developer Co-op
                <div className="text-slate-600 dark:text-slate-300">
                  Feb 2021 - Apr 2021
                </div>
              </div>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}
