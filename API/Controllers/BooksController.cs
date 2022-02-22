using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.DTOs;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController:ControllerBase
    {
        private readonly DataContext context;
        public BooksController(DataContext context)
        {
            this.context=context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetAllBooks()
        {
            return await context.Books.ToListAsync();
            //return context.Books.ToListAsync().Result;
            
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBookById(int id)
        {
            return await context.Books.FindAsync(id);
            //return await context.Books.Where(book => book.Id == id).FirstOrDefaultAsync();
        }

        [HttpPost("addBook")]
        public async Task<ActionResult<Book>> AddBook(BookDto bookDto)
        {
            //using - disposal of this object implicitly once class's work is done
            //when a class is called with Using statement - it calls the dispose() which implements IDisposable interface

            if(await BookExists(bookDto.BookName))
            {
                return BadRequest("Book exists");
            }

            var book = new Book{
                BookName=bookDto.BookName
            };

            this.context.Books.Add(book);
            await this.context.SaveChangesAsync();
            return book;

        }

        private async Task<bool> BookExists(string bookName)
        {
            return await this.context.Books.AnyAsync(x=>x.BookName==bookName.ToLower());

        }
    }
}