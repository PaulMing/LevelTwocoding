<template>
<div>
    问题：{{ question }}
    <!-- <button @click="handleClick">dianji</button> -->

</div>

</template>

<script>
export default {
    created () {
        const questionId = this.$route.params.id;
        const index = this.questionList.findIndex( item => item.questionId == questionId );

        if(index == -1) {
            // 跳转 a -> b ->c
            // this.$router.go(-1)

            // replace 替换 [a, b, c, e]
            this.$router.replace({name: 'err'})

            // push [a, b, c, d, e]
            // this.$router.push({name: 'err'})


        } else {
            this.question = this.questionList[index].title;
        }
    },
    methods: {
        handleClick () {
            // this.$router.push({name: 'err'})
        }
    },
    data () {
        return {
            question: '',
            questionList: [
                {
                    questionId: 201801,
                    title: '到底什么是es6中的class（类）？怎么实现class（类）？'
                },
                {
                    questionId: 201802,
                    title: '什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？'
                },
                {
                    questionId: 201803,
                    title: '什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>