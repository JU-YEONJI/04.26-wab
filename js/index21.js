async function fetfn(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.text();
    const comment = await JSON.parse(data);
    // 여기외워야할듯..맨날까먹어
    const basic = comment.filter(item => item.postId === 2)
    console.log(basic)
    for (let i in basic){
        document.write(
            `
            <dl>
            <dt> ${comment[i].name} </dt>
            <dd> ${comment[i].email} </dd>
            <dd> ${comment[i].body} </dd>
            </dl>
            `
        )
    }
}


fetfn()