<template>
    <div class="test-tree container">
        <el-tree
            v-if="treeList"
            ref="tree"
            :data="treeList"
            show-checkbox
            class="list-bt"
            :highlight-current="true"
            :default-expanded-keys="[16]"
            :default-checked-keys="checkedList"
            node-key="id"
            accordion
            @check-change="handleNodeClick"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            treeList: this.$store.state.treeList.lists, // tree树
            checkedList: this.$store.state.treeList.check_id, // 回显
            checkedTags: [], // 已勾选
        };
    },
    methods: {
        // tree勾选
        handleNodeClick(data) {
            this.getSimpleCheckedNodes(this.$refs.tree.store);
        },
        getSimpleCheckedNodes(store) {
            // 定义数组
            const checkedNodes = [];
            // 判断是否为全选，若为全选状态返回被全选的节点，不为全选状态正常返回被选中的节点
            const traverse = function(node) {
                const childNodes = node.root ? node.root.childNodes : node.childNodes;
                childNodes.forEach(child => {
                    if (child.checked) {
                        checkedNodes.push(child.data);
                    }
                    if (child.indeterminate) {
                        traverse(child);
                    }
                });
            };
            traverse(store);
            let codes = checkedNodes.map(m => {
                return m.code;
            });
            this.checkedTags = codes.join();
            console.log(123, this.checkedTags);
            return checkedNodes;
        },
    },
};
</script>
<style lang="less" scoped>

</style>
