import React from "react";
import { Tree } from "antd";
import type { GetProps, TreeDataNode } from "antd";

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>;

const { DirectoryTree } = Tree;

const treeData: TreeDataNode[] = [
  {
    title: "Local Drive C",
    key: "0-0",
    children: [
      { title: "File A", key: "0-0-0", isLeaf: true },
      { title: "File B", key: "0-0-1", isLeaf: true },
    ],
  },
  {
    title: "Local Drive D",
    key: "0-1",
    children: [
      { title: "File C", key: "0-1-0", isLeaf: true },
      { title: "File D", key: "0-1-1", isLeaf: true },
    ],
  },
];

const FolderTree: React.FC = () => {
  const onSelect: DirectoryTreeProps["onSelect"] = (keys, info) => {
    console.log("Trigger Select", keys, info);
  };

  const onExpand: DirectoryTreeProps["onExpand"] = (keys, info) => {
    console.log("Trigger Expand", keys, info);
  };

  return (
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
  );
};

export default FolderTree;
