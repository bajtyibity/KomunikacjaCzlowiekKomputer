﻿// <auto-generated />
using AngularApp8.Server.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AngularApp8.Server.Migrations
{
    [DbContext(typeof(Diagnoza))]
    [Migration("20240626194111_PierwszaMigracja")]
    partial class PierwszaMigracja
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("AngularApp8.Server.diagnoza", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Choroba")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Objaw1")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Objaw10")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Objaw2")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Objaw3")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Objaw4")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Objaw5")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Objaw6")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Objaw7")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Objaw8")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Objaw9")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("diagnoza");
                });
#pragma warning restore 612, 618
        }
    }
}
