document.getElementById("loadProfile").addEventListener("click", () => {
    const APIrequest = 'https://api.github.com/users/hiteshchoudhary';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', APIrequest);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const response = JSON.parse(this.responseText)
            console.log(response);
            document.getElementById("userImage").src = response.avatar_url;
            document.getElementById("userName").textContent = response.name;
            document.getElementById("userFollowes").textContent = `Followers : ${response.followers}`
        }
    }
    document.getElementById("loadProfile").setAttribute('class' , 'hidden')
    xhr.send();
})
