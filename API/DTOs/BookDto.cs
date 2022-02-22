using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class BookDto
    {
        [Required]
        public string BookName { get; set; }
    }
}