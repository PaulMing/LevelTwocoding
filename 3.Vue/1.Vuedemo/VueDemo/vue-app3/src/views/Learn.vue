<template>
<div>
    <!-- 课程学习 -->
    <course-list></course-list>

    <!-- <button class="change-course-btn">修改课程</button> -->

    <router-link :to="{name: 'changeCourse'}"
                 tag="button"
                 class="change-course-btn"
    >
        修改课程
    </router-link>
</div>

</template>

<script>
import CourseList from '@/components/learn/CourseList'

export default {
    components: {
        CourseList
    }    
}
</script>

<style>
.change-course-btn {
    display: block;
    margin: 20px auto;
    width: 200px;
    line-height: 40px;
    background-color: #000;
    color: #fff;
}
</style>