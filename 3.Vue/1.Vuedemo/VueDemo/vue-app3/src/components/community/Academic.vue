<template>
    <ul>
        <router-link    tag="li"
                        :to="{name: 'question', params: {id: item.questionId}}"
                        v-for="item in questionList" 
                        :key="item.questionId">
                            {{item.title}}
        </router-link>

            <!-- <router-link to=""></router-link> -->
    </ul>

</template>

<script>
export default {
    // 组件内守卫
    beforeRouteEnter (to, from, next) {
        const isLogin = to.matched[0].meta.login;
        
        if(isLogin) {
            next();
            return;
        }

        const answer = confirm('你还没有登陆，要登陆后才能浏览信息，要登陆嘛？');

        if(answer) {
            next({name: 'personal'})
        } else {
            next(false);
        }
    },
    beforeRouteLeave (to, from, next) {
        const answer = confirm('确定要离开吗？')
        if( answer ) {
            next()
        } else {
            next(false)
        }
    },
    data () {
        return {
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

<style>

ul {
    margin-top: 20px;
}
li {
    line-height: 30px;
}
</style>