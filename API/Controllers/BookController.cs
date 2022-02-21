using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<ActionResult<Book>> GetBooksById(int id)
        {
            return await context.Books.FindAsync(id);
            //return await context.Books.Where(book => book.Id == id).FirstOrDefaultAsync();
        }
    }
}