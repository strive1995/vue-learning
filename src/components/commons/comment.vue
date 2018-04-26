<template>
    <div class="tmpl">
        <!-- 加入评论内容开始 -->
        <div class="photo-bottom">
            <ul>
                <li class="photo-comment">
                    <div>
                        <span>提交评论</span>
                        <span><a @click="goBack">返回</a></span>
                    </div>
                </li>
                <li class="txt-comment">
                    <textarea v-model="newComment"></textarea>
                </li>
                <li>
                    <mt-button type="primary" size="large" @click="sendMsg">发表评论</mt-button>
                </li>
                <li class="photo-comment">
                    <div>
                        <span>评论列表</span>
                        <span>66条评论</span>
                    </div>
                </li>
            </ul>
            <ul class="comment-list">
                <li v-for="(item,index) in comments" :key="index">
                    {{item.user_name}}：{{item.content}} {{item.add_time |convertTime}}
                </li>
            </ul>
            <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>
        </div>
        <!-- 评论内容结束 -->
    </div>
</template>
<script>
import {
    Indicator
} from 'mint-ui';
export default {
    data() {
        return {
            pageindex: 1,
            comments: [],
            newComment: ''
        }
    }, props: ['cid'], methods: {
        loadMore() { //如果当前pageindex= 1
            //加载第二页及以后的数据
            this.$http.get(`${this.$myConfig.host}/api/getcomments/${this.$props.cid}?pageindex=` + this.pageindex)
                .then(res => {
                    this.pageindex++;
                    this.comments = this.comments.concat(res.body.message);
                }, res => {
                    console.log('加载更多评论失败');
                });
        },
        sendMsg() {
            //显示加载中图标
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });

            this.$http.post(this.$myConfig.host + '/api/postcomment/' + this.$props.cid, {
                content: this.newComment
            }, {
                emulateJSON: true
            }).
            then(res => {
                //追加到第一条数据 ，不符合需求，大家都能操作，所以需要实时更新
                // this.comments.unshift({
                //     user_name: '匿名用户',
                //     content: this.newComment,
                //     add_time: Date.now()
                // });
                //只要发表了评论，评论的数组要清空，pageindex=1
                this.comments = []; //为了复用loadMore函数，内部全是追加
                this.pageindex = 1;
                this.loadMore(); //加载第一页的数据
                Indicator.close(); //关闭加载中图示

                //清空当前的评论输入框

                this.newComment = '';
            }, res => {
                console.log('发表评论失败！');
            });
        },
        goBack() {
                this.$router.go(-1); //返回上一次历史记录
            }
    }, created() {
        //获取第一页数据
        //获取相关评论，条件是当前的id
        this.loadMore(); //此时pageIndex = 1
    }
}
</script>
<style scoped>
/*评论css*/

.photo-comment > div span:nth-child(1) {
    float: left;
    font-weight: bold;
    margin-left: 5px;
}

.photo-comment > div span:nth-child(2) {
    float: right;
}

.photo-comment {
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    line-height: 30px;
    margin-bottom: 5px;
}

.txt-comment {
    padding: 5 5;
}

.txt-comment textarea {
    margin-bottom: 2px;
    height: 100px;
}

.comment-list li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 2px;
    margin-bottom: 2px;
    padding-left: 5px;
}

li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}
.txt-comment[data-v-39d8e90a] {
    padding: 5 5;
    height: 187px;
}
.txt-comment textarea[data-v-39d8e90a] {
    margin-bottom: 2px;
    height: 100%;
}
</style>
