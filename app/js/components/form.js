const form = () => {
    const forms = document.querySelectorAll('form');

    const formStatusMessage = {
        loading: "Загрузка данных...",
        loaded: "Спасибо, скоро мы с Вами свяжемся",
        error: "ошибка отправки данных"
    }

    const inputNum = (selector) => {
        const input = document.querySelectorAll(selector);

        input.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/gi, '')
            })
        })
    };
    inputNum('input[type=tel]')

    const inputReset = () => {
        const input = document.querySelectorAll('input');

        input.forEach(item => {
            item.value = '';
        }) 
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = formStatusMessage.loading;

        let res = await fetch(url, {
            method: "POST",
            body: data
        })

        return await res.text();
    };

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
    
            let messageStatus = document.createElement('div');
            messageStatus.classList.add('status');
            item.appendChild(messageStatus);

            const formData = new FormData(item);
            console.log(JSON.stringify(Object.fromEntries(formData)));

            postData('../server.php', item)
                .then(res => {
                    messageStatus.textContent = formStatusMessage.loaded;
                })
                .catch(() => {
                    messageStatus.textContent = formStatusMessage.error;
                })
                .finally(() => {
                    inputReset();
                    setTimeout(() => {
                        messageStatus.remove();
                    }, 3000);
                })
    
        })
    })

}
export{form}