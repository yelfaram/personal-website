import { File, Folder, Tree } from "@/components/magicui/file-tree";

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
            <File value="masters">MEng Electrical & Computer Engineering</File>
            <File value="bachelors">BASc Computer Engineering</File>
          </Folder>
        </Folder>
        <Folder element="Experience" value="experience">
          <Folder element="Mitel Networks Corporation" value="mitel">
            <File value="mitel-2022">
              Software Developer Co-op (May 2022 – Aug 2022)
            </File>
            <File value="mitel-2021">
              Software Developer Co-op (Sept 2021 – Dec 2021)
            </File>
          </Folder>
          <Folder element="Transport Canada" value="transport-canada">
            <File value="transport-canada-2021">
              Application Developer Co-op (Feb 2021 – Apr 2021)
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}
