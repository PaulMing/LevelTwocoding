<template>

    <div>
        学生列表：
        <ul>
            <li v-for="(item, index) in student"
                :key="index+item"
            >
                {{index}}-{{item}}
            </li>
        </ul>
    </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState('student', ['studentList']),
        ...mapGetters('student', {
            student: 'newStudent'
        })
    },
    created () {
        this.bus.$on('add', name => {
            this.studentList.push(name)
        })
    }
}
</script>

<style scoped>

</style>