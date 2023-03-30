using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FullStackAPI.Migrations
{
    public partial class AddColumnIsActiveInTableEmployee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IsActive",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Employee");
        }
    }
}
