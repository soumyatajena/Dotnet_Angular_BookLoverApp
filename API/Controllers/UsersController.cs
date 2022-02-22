using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    public class UsersController:BaseApiController
    {
        private readonly DataContext context;
        public UsersController(DataContext context)
        {
            this.context=context;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            return await context.Users.ToListAsync();           
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserById(int id)
        {
            return await context.Users.FindAsync(id);
        }
    }
}