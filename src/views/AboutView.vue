<template>
  <!-- <div class="container" @scroll="onScroll" ref="container">
    <div class="panel" ref="panel" :style="{ paddingTop: paddingTop + 'px' }">
      <div class="item" v-for="item in visibleList" :key="item">{{ item }}</div>
    </div>
  </div> -->

  <el-tree
    :data="treeData"
    show-checkbox
    node-key="id"
    ref="treeRef"
    check-on-click-node
    :default-expand-all="true"
    :check-strictly="true"
    :expand-on-click-node="false"
    @node-click="nodeClick"
  >
  </el-tree>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { ElTree } from "element-plus";
let arr: any[] = [];
let treeData = ref([
  {
    id: 1,
    label: "一级 1",
    children: [
      {
        id: 4,
        label: "二级 1-1",
        children: [
          {
            id: 9,
            label: "三级 1-1-1",
            children: [
              {
                id: 11,
                label: "四级 1-1-1",
              },
            ],
          },
          {
            id: 10,
            label: "三级 1-1-2",
          },
          {
            id: 12,
            label: "三级 1-1-3",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "一级 2",
    children: [
      {
        id: 5,
        label: "二级 2-1",
      },
      {
        id: 6,
        label: "二级 2-2",
      },
    ],
  },
  {
    id: 3,
    label: "一级 3",
    children: [
      {
        id: 7,
        label: "二级 3-1",
      },
      {
        id: 8,
        label: "二级 3-2",
      },
    ],
  },
]);

// export default {
// setup() {
// interface Tree {
//   id: number;
//   label: string;
//   children?: Tree[];
// }

const treeRef = ref<InstanceType<typeof ElTree>>();

// const getCheckedNodes = () => {
//   console.log(treeRef.value!.getCheckedNodes(false, false));
// };
// const getCheckedKeys = () => {
//   console.log(treeRef.value!.getCheckedKeys(false));
// };
const nodeClick = (data: any, node: any) => {
  console.log(111);
  //这个方法是勾选父级子级也默认勾选 取消子级不影响父级
  childNodesChange(node);
  // 这个方法是勾选子级默认把父级也勾选上
  parentNodesChange(node);
  // this.$refs.Tree.getCheckedNodes() 这个方法是官网自带的 若节点可被选择（即    show-checkbox 为 true），则返回目前被选中的节点所组成的数组
  arr = treeRef.value!.getCheckedNodes();
  let list = [];
  arr.forEach((item) => {
    list.push(item.id);
  });
  // console.log(SelectMenulist, "这是需要传给后端勾选的数据id");
};
const childNodesChange = (node: any) => {
  console.log(node.checked, node.childNodes);
  let len = node.childNodes.length;
  if (len > 0) {
    for (let i = 0; i < len; i++) {
      if (!node.checked) {
        node.childNodes[i].checked = false;
      } else {
        node.childNodes[i].checked = true;
      }
      childNodesChange(node.childNodes[i]);
    }
  }
};
const parentNodesChange = (node: any) => {
  if (node.parent) {
    for (let key in node) {
      if (key == "parent") {
        node[key].checked = true;
        parentNodesChange(node[key]);
      }
    }
  }
};

// const setCheckedNodes = () => {
//   treeRef.value!.setCheckedNodes(
//     [
//       {
//         id: 5,
//         label: "Level two 2-1",
//       },
//       {
//         id: 9,
//         label: "Level three 1-1-1",
//       },
//     ] as Node[],
//     false
//   );
// };
// const setCheckedKeys = () => {
//   treeRef.value!.setCheckedKeys([3], false);
// };
// const resetChecked = () => {
//   treeRef.value!.setCheckedKeys([], false);
// };
// const defaultProps = {
//   children: "children",
//   label: "label",
// };

// const data: Tree[] = [
//   {
//     id: 1,
//     label: "Level one 1",
//     children: [
//       {
//         id: 4,
//         label: "Level two 1-1",
//         children: [
//           {
//             id: 9,
//             label: "Level three 1-1-1",
//           },
//           {
//             id: 10,
//             label: "Level three 1-1-2",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     label: "Level one 2",
//     children: [
//       {
//         id: 5,
//         label: "Level two 2-1",
//       },
//       {
//         id: 6,
//         label: "Level two 2-2",
//       },
//     ],
//   },
//   {
//     id: 3,
//     label: "Level one 3",
//     children: [
//       {
//         id: 7,
//         label: "Level two 3-1",
//       },
//       {
//         id: 8,
//         label: "Level two 3-2",
//       },
//     ],
//   },
// ];
//   return {};
// },
// };
</script>

<style>
#app /deep/ .el-tree-node__label {
  position: relative;
}
#app /deep/ .el-tree-node__label:before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  position: absolute;
  top: 0px;
  left: -24px;
  z-index: 999;
}
#app /deep/ .el-checkbox__inner {
  top: 0;
}

/* * {
  box-sizing: border-box;
  margin: 0;
}
.container {
  height: 100vh;
  overflow: scroll;
}
.panel {
  border: 1px solid red;
}
.item {
  border: 1px solid #eee;
  padding: 6px 10px;
  cursor: pointer;
} */
</style>
