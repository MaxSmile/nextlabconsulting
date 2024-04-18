const fs = require("fs");
const matter = require("gray-matter");
const { join } = require("path");

const blogsDirectory = join(process.cwd(), "_blogs");
// const portfolioDirectory = join(process.cwd(), "_portfolio");
// const servicesDirectory = join(process.cwd(), "_services");
const membersDirectory = join(process.cwd(), "_members");

function getBlogSlugs() {
    return fs.readdirSync(blogsDirectory);
}

// function getPortfolioSlugs() {
//     return fs.readdirSync(portfolioDirectory);
// }

// function getServiceSlugs() {
//     return fs.readdirSync(servicesDirectory);
// }

function getMemberSlugs() {
    return fs.readdirSync(membersDirectory);
}

function getBlogBySlug(slug) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(blogsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
  
    return { ...data, slug: realSlug, content };
  }
  
 function getMemberBySlug(slug) {
    const realSlug = slug.replace(/\.md$/, "");
    console.log(realSlug)
    const fullPath = join(membersDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
  
    return { ...data, slug: realSlug, content };
  }

// Exporting functions
module.exports = {
    getBlogSlugs,
    // getPortfolioSlugs,
    // getServiceSlugs,
    getMemberSlugs,
    blogsDirectory,
    // portfolioDirectory,
    // servicesDirectory,
    membersDirectory,
    getBlogBySlug,
    getMemberBySlug
};

