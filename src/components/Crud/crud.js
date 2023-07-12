
function CURD(options){
    const defaultOptions={
        tag:'default',
        idField:'id',
        title:'',
        url:'',
        data:[],
        selections:{},
        query:{},
        params:{},
        form:{},
        defaultForm:()=>{

        },
        sort:'[id,desc]',
        time:50,
        crudMethod:{
            add:()=>{},
            del:()=>{},
            edit:()=>{},
            get:()=>{},
        },
        optShow:{
            add:true,
            edit:true,
            del:true,
            download:true,
            reset:true
        },
        props:{}
    },
    optionsChange=mergeOptions(defaultOptions,options)
    const data={
        ...optionsChange,
        dataStatus:{},
        status:{
            add:CURD.STATUS.NORMAL,
            edit:CURD.STATUS.NORMAL
        },
        msg:{
            add:'添加成功',
            submit:'提交成功',
            del:'删除成功',
            edit:'编辑成功'
        },
        page:{
            size:10,
            page:0,
            total:0
        }
    }

}
function presenter(){

}
function mergeOptions(src,opts){
    const optsRet={
        ...src
    }
    for(const key in src){
        if(Object.prototype.hasOwnProperty.call(opts, key)){
            optsRet[key]=opts[key]
        }
    }
    return optsRet
}
CURD.STATUS = {
  NORMAL: 0,
  PREPARED: 1,
  PROCESSING: 2
}

export default CURD
export{
    presenter
}