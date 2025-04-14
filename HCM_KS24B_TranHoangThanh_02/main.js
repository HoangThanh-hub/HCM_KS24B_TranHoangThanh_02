let listBook = [
    {
        name: 'Harry Potter',
        author: 'JK Rowling',
        year: 1995,
        category: 'Fiction'
    },
    {
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960,
        category: 'Classic'
    },
    {
        name: '1984',
        author: 'George Orwell',
        year: 1949,
        category: 'Dystopian'
    },
    {
        name: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        category: 'Novel'
    },
];

let search = document.getElementById('search')



// hieenr thi
const displayBookList = (bookArray) => {
    let tbody = document.getElementById("list");
    let html = "";
    bookArray.forEach((stu) => {
        html += ` <tr style='text-align: center;'>
                <td>${stu.name}</td>
                <td>${stu.author}</td>
                <td>${stu.year}</td>
                <td>${stu.category}</td>
                <td><button onclick="editBookByName('${stu.name}')" class="btn " style='margin-right:10px;background-color: #3498DB;color: white;'>Sửa</button>
                <button onclick="deleteBook('${stu.name}')" class="btn" style="background-color: #3498DB;color: white;">Xóa</button></td>
            </tr>`;
    })
    tbody.innerHTML = html;
}

displayBookList(listBook)


// Thêm mới  
const addBook = () => {

    // nhập dữ liệu 
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let year = document.getElementById('year').value;
    let category = document.getElementById('category').value;
    
    let flag = true;

    if (name.trim() == "") {
        document.getElementById("error_name").innerText = "Không được bỏ trống";
        flag = false;
    }else {
        document.getElementById("error_name").innerText = "";
    }

    if (author.trim() == "") {
        document.getElementById("error_author").innerText = "Không được bỏ trống";
        flag = false;
    }else {
        document.getElementById("error_author").innerText = "";
    }

    if (year.trim() == "" || isNaN(year) || Number(year) < 0 || Number(year) > 2025) {
        document.getElementById("error_year").innerText = "Năm phải hợp lệ";
        flag = false;
    }else {
        document.getElementById("error_year").innerText = "";
    }

    if (category.trim() == "") {
        document.getElementById("error_category").innerText = "Không được bỏ trống";
        flag = false;
    }else {
        document.getElementById("error_category").innerText = "";
    }


    if(flag){

        // tạo ra đối tượng 
        let newBook = {
            name,
            author,
            year,
            category,
        }
        
        listBook.push(newBook);
    
        displayBookList(listBook);
        
        document.getElementById('name').value = "";
        document.getElementById('author').value = "";
        document.getElementById('year').value = "";
        document.getElementById('category').value = "";
    }
    


   
}

// xoá sach
const deleteBook = (name) => {
    // xáo nhận xóa
    let confirm = window.confirm(`Bạn có chắc chắn muốn xóa sách ${name} không ??`)
    if (confirm) {
        listBook = listBook.filter(item=> item.name != name);
        displayBookList(listBook);
    }
}


const editBookByName= (name) => {
    let book = listBook.find(book => book.name === name);

    // hiển thị lại 
    let newName = prompt("Nhập tên sách mới:", book.name);
    let newAuthor = prompt("Nhập tên tác giả mới:", book.author);
    let newYear = prompt("Nhập năm xuất bản mới:", book.year);
    let newCategory = prompt("Nhập thể loại mới:", book.category);

    // cập nhật
    book.name = newName;
    book.author = newAuthor;
    book.year = newYear;
    book.category = newCategory;

    displayBookList(listBook);
};

// tìm kiếm
search.addEventListener("input", function () {
    let keyword = search.value.toLowerCase(); 

    
    let filterBooks = listBook.filter(book =>
        book.name.toLowerCase().includes(keyword)
    );
    displayBookList(filterBooks);

});

