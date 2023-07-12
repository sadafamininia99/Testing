const fetchData=require('./fetchData')



test ("test asycn fucntions ",async()=>{
    const data=await fetchData()
    expect(data).toBe('done')
})



//it ('name of the test',())=>{}
//expect().tobe()