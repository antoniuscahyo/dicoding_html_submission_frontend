function main() {

    const getBook = () => {
        // membuat instance dari XMLHttpRequest
        const xhr = new XMLHttpRequest();
            
        //menetapkan callback jika response sukses dan error
        xhr.onload = function() {
            const responseJson = JSON.parse(this.responseText);
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllBooks(responseJson.books);
            }
        }
    
        xhr.onerror = function() {
            showResponseMessage();
        }
    
        // Membuat GET request dan menetapkan target URL
        xhr.open("GET", "https://web-server-book-dicoding.appspot.com/list");
        // Mengirimkan request
        xhr.send();

        const responseJson = JSON.parse(this.responseText);
        if(responseJson.error) {
            showResponseMessage(responseJson.message);
        } else {
            renderAllBooks(responseJson.books);
        }
    };

    /*
        jangan ubah kode di bawah ini ya!
    */

    const renderAllBooks = (books) => {
        const listBookElement = document.querySelector("#listBook");
        listBookElement.innerHTML = "";

        books.forEach(book => {
            listBookElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                            <h5>(${book.id}) ${book.title}</h5>
                            <p>${book.author}</p>
                            <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
                        </div>
                    </div>
                </div>
            `;
        });

        const buttons = document.querySelectorAll(".button-delete");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                const bookId = event.target.id;
                removeBook(bookId);
            })
        })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

}

export default main;