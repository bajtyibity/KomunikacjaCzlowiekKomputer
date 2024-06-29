using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AngularApp8.Server.Migrations
{
    /// <inheritdoc />
    public partial class PierwszaMigracja : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "diagnoza",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Objaw1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Objaw2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Objaw3 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Objaw4 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Objaw5 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Objaw6 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Objaw7 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Objaw8 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Objaw9 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Objaw10 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Choroba = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_diagnoza", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "diagnoza");
        }
    }
}
