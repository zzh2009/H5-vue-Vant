<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
html,body,span,p,div, ul, li, img {
  margin: 0;
  padding: 0;
}
html, body {
    background-color: #e7e8eb;
    height: 100%;
    font-size: 14px;
    color:  #575757;
}   
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 1300px;
    margin: auto;
    overflow: auto;
    background: #F0F2F6;
}
/*根据设计稿修改所有input border-radius*/
#app .el-input__inner {
    border-radius: 2px;
}
/*修改所有input高度*/
#app .el-input__inner {
    height: 28px;
    font-size: 14px;
}
img {
    border: none;
    vertical-align: middle;
}
a {
    text-decoration: none;
    color: #232323;
}
table {
    border-collapse: collapse;
    table-layout: fixed;
}
input, textarea {
    outline: none;
    border: none;
}
textarea {
    resize: none;
    overflow: auto;
}
.clearfix:after {
    content: ".";
    width: 0;
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
    overflow:hidden;
}
/*整体修改表格字体为12px*/
#app .el-table .cell {
    font-size: 14px;
}

/*去掉表格底部边 整体修改*/
#app .el-table td, #app .el-table th.is-leaf {
    border-bottom: none;
}

/*滚动条整体部分,必须要设置*/
::-webkit-scrollbar {
    border-radius: 5px;
    width: 10px;
}
::-webkit-scrollbar-thumb {  /* 滑块 */
    border-radius: 5px;
    background-color: #ccc;
}
::-webkit-scrollbar-track{
    background: #efefef;
}
::-webkit-scrollbar:horizontal{
    height: 10px;
}
</style>
