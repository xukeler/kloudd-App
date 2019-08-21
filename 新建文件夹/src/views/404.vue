<template>
    <div>
        <div  id="box" ref="der"></div>
    <input type="file" accept="image/*" capture="camera" >
    <button @click="click">click</button>
    <DER>
        <p slot="der"></p>
        <span>klkllkl</span>
    </DER>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from "vuex";
import DER from "../components/der"
export default {
    data(){
        return {

        }
    },
    components:{
        DER
    },
    mounted(){
        this.drawLine()
    },
    computed:{
        ...mapState(["name"]),
        
    },
    methods:{
        ...mapMutations(["show"]),
        click(){
            this.show()
        },
        drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('box'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
    }
}
</script>
<style lang="scss" scoped>
    #box{
        width: 100%;
        height: 400px;
    }
</style>
