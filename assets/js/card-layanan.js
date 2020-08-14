class CardLayanan extends HTMLElement {

    connectedCallback() {
        this.image = this.getAttribute("image") || null;
        this.judul = this.getAttribute("judul") || null;
        this.deskripsi = this.getAttribute("deskripsi") || null;
      
        this.innerHTML = `
        <div class="card-layanan">
        <br>
        <img src="assets/images/${this.image}" style="width:50%" class="image-round">
        <H3>${this.judul}</h3>
        <br><hr><br>
        <p class="title">${this.deskripsi}</p><br>
        </div>
        `;
    }

}
 
customElements.define("card-layanan", CardLayanan);