using System.ComponentModel.DataAnnotations;

namespace FullStackAPI.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public string DOB { get; set; }
        [Required]
        public string DOJ { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string Salary { get; set; }
        [Required]
        public string Department { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public bool IsActive { get; set; }

    }
}
