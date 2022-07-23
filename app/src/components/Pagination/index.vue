<template>
  <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('get-pageno',pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.start>1" @click="$emit('get-pageno',1)"  :class="{active:pageNo==1}">1</button>
    <button v-if="startNumAndEndNum.start>2">···</button>

    <button v-for="(page,index) in startNumAndEndNum.end" :key="index" v-show="page>=startNumAndEndNum.start" @click="$emit('get-pageno',page)" :class="{active:pageNo==page}">{{page}}</button>


    <button v-show="startNumAndEndNum.end +1 <pages">···</button>
    <button v-show="startNumAndEndNum.end <pages" @click="$emit('get-pageno',pages)" :class="{active:pageNo==pages}">{{pages}}</button>
    <button :disabled="pageNo==pages"  @click="$emit('get-pageno',pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共{{total}}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:['pageNo','pageSize','total','continues'],
  computed:{
    pages(){
        return Math.ceil(this.total / this.pageSize)
    },
    startNumAndEndNum(){
      const continues = Number(this.continues)
        let start = 0,end = 0
        if(this.pages<continues){
            start = 1
            end = this.pages
        }
        else{
            start = this.pageNo - parseInt(continues/2)
            end = this.pageNo + parseInt(continues/2)
            if(start<1){
                start = 1
                end = Number(continues)
            }
            if(end>this.pages){
                end = this.pages
                start = this.pages - continues + 1
            }
        }
        return {start,end}
    }
  },
  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
