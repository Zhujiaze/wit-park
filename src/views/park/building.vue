<template>
    <div>
        <el-form v-model="query">
            <el-form-item label="楼宇名称">
                <el-input v-model="query.name" placeholder="请输入楼宇名称" style="width: 220px;"></el-input>
                <el-button type="primary" style="background-color: #4770ff;margin-left: 20px;"
                    @click="initbuildingList">查询</el-button>
            </el-form-item>
        </el-form>
    </div>



    <div>
        <el-button type="primary" style="background-color: #4770ff;margin-left: 20px;"
            @click="handesadd">添加楼宇</el-button>
        <el-table :data="BdList" style="width: 100%">
            <el-table-column type="index" label="序号" width="180" />
            <el-table-column prop="name" label="楼宇名称" width="180" />
            <el-table-column prop="floors" label="层数" />
            <el-table-column prop="area" label="在管面积(m²)" />
            <el-table-column prop="unit" label="物业费(元/m²)" />
            <el-table-column label="状态">
                <template #default="{ row }">
                    {{ row.status == 1 ? '租赁中' : '空置中' }}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="{ row }">
                    <el-button type="primary" link size="small" @click="handesedit(row)">编辑</el-button>
                    <el-button type="primary" link size="small" @click="handesdelete(row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <div class="footerss">
        <el-pagination v-model:current-page="query.page" v-model:page-size="query.pageSize"
            :page-sizes="[10, 20, 30, 50]" layout="total, sizes, prev, pager, next" :total="total"
            @size-change="initbuildingList" @current-change="initbuildingList" />

    </div>

    <budialog ref="dialogRef" @refresh="handleRefresh"></budialog>

</template>

<script lang="ts" setup>
import { DELETEEditbuilding, getbuildingList } from '@/api/building'
import type { Row } from '@/api/types/buildingType';


const budialog = defineAsyncComponent(() => import('./budialog.vue'))


const BdList = ref<Row>()
const query = reactive({
    name: '',
    page: 1,
    pageSize: 10
})
const total = ref<number>(0)

const initbuildingList = async () => {
    const res = await getbuildingList({
        name: query.name,
        page: String(query.page),
        pageSize: String(query.pageSize)
    })
    BdList.value = res.data.rows
    total.value = res.data.total
    // console.log(res)
}

initbuildingList()
const dialogRef = ref<InstanceType<typeof budialog>>()

const handesadd = () => {
    dialogRef.value?.dialogopen('add', '添加楼宇')
}
const handesedit = (row: Row) => {
    dialogRef.value?.dialogopen('edit', '编辑楼宇', { row: row })
}
const handleRefresh = () => {
    initbuildingList()
}
const handesdelete = async (id: number) => {

    await DELETEEditbuilding({
        id: String(id)
    })
    initbuildingList()
    // console.log(res)
}
</script>

<style lang="scss" scoped>
.footerss {
    display: flex;
    justify-content: right;
    align-items: center;
    background-color: #fff;
}
</style>