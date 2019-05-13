<template>
<div>
    <!-- 学员展示 -->
    <!-- <add-student @add="add"></add-student>
    <student-list :student-list="studentList"></student-list> -->

    <add-student></add-student>
    <student-list></student-list>
</div>

</template>

<script>
import AddStudent from '@/components/student/AddStudent'
import StudentList from '@/components/student/StudentList'


export default {
    components: {
        AddStudent,
        StudentList
    },
    data () {
        return {
            studentList: []
        }
    },
    methods: {
        add (name) {
            this.studentList.push(name);
        }
    }
}
</script>

<style>

</style>