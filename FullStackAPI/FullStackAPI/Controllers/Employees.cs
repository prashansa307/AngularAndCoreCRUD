using FullStackAPI.Data;
using FullStackAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStackAPI.Controllers
{
    [ApiController]
    [Route("/API/[controller]")]
    public class Employees : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;

        
        public Employees(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees=await _fullStackDbContext.Employee.Where(x => x.IsActive == true).ToListAsync();
            return Ok(employees);
        }
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid Id)
        {
            var employees = await _fullStackDbContext.Employee.Where(x => x.Id == Id).FirstOrDefaultAsync();
            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee empData)
        {
            var employees = await _fullStackDbContext.Employee.AddAsync(empData);
            _fullStackDbContext.SaveChanges();
            return Ok(employees);
        }
        [HttpPatch]
        public async Task<IActionResult> UpdateEmployee([FromBody] Employee empData)
        {
            var employees = await _fullStackDbContext.Employee.FirstOrDefaultAsync(x=>x.Id==empData.Id);
            if (employees != null)
            {
                employees.Name = empData.Name;
                employees.Email = empData.Email;
                employees.Phone = empData.Phone;
                employees.DOB = empData.DOB;
                employees.DOJ = empData.DOJ;
                employees.Gender = empData.Gender;
                employees.Salary = empData.Salary;
                employees.Department = empData.Department;
                employees.State = empData.State;
                employees.City = empData.City;
                employees.Address = empData.Address;
                //employees.Password = empData.Password;

            }
            _fullStackDbContext.SaveChanges();
            return Ok(employees);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid Id)
        {
            var employees = await _fullStackDbContext.Employee.FindAsync(Id);
            if(employees==null)
            {
                return NotFound();
            }
            else
            {
                employees.IsActive = false;
            }
            //_fullStackDbContext.Employee.Remove(employees);
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(employees);
        }
    }
}
