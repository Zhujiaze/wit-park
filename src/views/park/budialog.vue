<template>
    <el-dialog v-model="buVisible" :title="dialogTitle" style="width: 580px; padding: 20px 100px ;">
        <div>
            <el-form label-position="top" v-model="dialogForm">
                <el-form-item label="楼宇名称" prop="name">
                    <el-input v-model="dialogForm.name" style="width: 380px;" placeholder="请输入楼宇名称"></el-input>
                </el-form-item>
                <el-form-item label="楼宇层数" prop="floors">
                    <el-input v-model="dialogForm.floors" style="width: 380px;" placeholder="请输入楼宇层数"></el-input>
                </el-form-item>
                <el-form-item label="在管面积" prop="area">
                    <el-input v-model="dialogForm.area" style="width: 380px;" placeholder="请输入在管面积"></el-input>
                </el-form-item>
                <el-form-item label="物业费" prop="propertyFeePrice">
                    <el-input v-model="dialogForm.propertyFeePrice" style="width: 380px; "
                        placeholder="请输入物业费"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogclose">取消</el-button>
                <el-button type="primary" @click="dialogSubmit">确定</el-button>
            </span>
        </template>

    </el-dialog>
</template>

<script lang="ts" setup>
import type { postAddbuildingType } from '@/api/types/buildingType';
import { PUTEditbuilding, postAddbuilding } from '@/api/building'
const buVisible = ref<boolean>(false)
const dialogTitle = ref<string>('添加楼宇')
const dialogType = ref<string>()


const dialogForm = reactive<postAddbuildingType>({
    name: '',
    floors: 0,
    area: 0,
    propertyFeePrice: 0,
    id: 0
})



const dialogopen = (type: string, title: string, data?: any) => {
    buVisible.value = true
    dialogType.value = type
    dialogTitle.value = title
    console.log(data.row);

    if (type == 'edit') {
        dialogForm.name = data.row.name
        dialogForm.floors = data.row.floors
        dialogForm.area = data.row.area
        dialogForm.propertyFeePrice = data.row.propertyFeePrice
        dialogForm.id = data.row.id

    }

}

const dialogclose = () => {
    buVisible.value = false
}
const emits = defineEmits(['refresh'])
const dialogSubmit = async () => {
    if (dialogType.value == 'add') {
        try {
            const res = await postAddbuilding(dialogForm)
            console.log(res);
            emits('refresh')
            dialogclose()
        } catch (error) {
            console.log(error);

        }
    } else if (dialogType.value == "edit") {
        console.log("edit");
        await PUTEditbuilding(dialogForm)
        // console.log(res);
        emits('refresh')
        dialogclose()
    }
}




defineExpose({
    dialogopen,
    dialogclose
})





</script>

<style lang="scss" scoped></style>