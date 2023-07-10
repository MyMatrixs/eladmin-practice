import{initData,download} from '@/api/data'


export default{
    data(){
        return{
            data:[],
            sort:['id,desc'],
            url:'',
            page:0,
            size:10,

        }
    },
    methods:{
        async init(){
            return new Promise((resolve,reject)=>{
                initData(this.url,)
            })
        },
        getQueryParams:function(){
            return {
                page:this.page,
                size:this.size,
                sort:this.sortnp
            }
        }

    }
}