# 🚀 Qualcomm Company Website

A modern, fully functional full-stack website for Qualcomm featuring a story-based landing page, smooth animations, and multiple interactive pages.

## ✨ Features

- 🎨 **Story-based Landing Page** with engaging hero section and animations
- 📱 **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎬 **Smooth Animations** - GSAP animations, hover effects, and transitions
- 🌐 **Multi-Page Website** with 6 complete pages
- 📧 **Functional Contact Form** with validation and backend processing
- 💼 **Careers Page** with job listings and application modal
- 📰 **Newsletter Subscription** functionality
- 🎯 **Interactive UI Elements** - Counters, cards, modals, and more
- ⚡ **Performance Optimized** - Fast loading and smooth scrolling
- 🔐 **Form Validation** - Client and server-side validation

## 📚 Pages

1. **Home** (`/`) - Story-based landing page with company narrative
2. **Products** (`/products`) - Showcase of Qualcomm products with detailed cards
3. **About** (`/about`) - Company mission, values, and leadership team
4. **Innovation** (`/innovation`) - Innovation hub with timeline and research areas
5. **Careers** (`/careers`) - Job opportunities and application system
6. **Contact** (`/contact`) - Contact form and company information
7. **404** - Custom error page

## 🛠 Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, flexbox, and grid
- **Vanilla JavaScript** - No dependencies, pure JS
- **GSAP** - GreenSock Animation Platform for smooth animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **EJS** - Templating engine
- **Body-Parser** - Middleware for parsing request bodies
- **CORS** - Cross-Origin Resource Sharing

## 📋 Project Structure

```
qualcomm-company-website/
├── public/
│   ├── css/
│   │   ├── style.css           # Main styles
│   │   ├── products.css        # Products page styles
│   │   ├── contact.css         # Contact page styles
│   │   ├── innovation.css      # Innovation page styles
│   │   ├── careers.css         # Careers page styles
│   │   └── about.css           # About page styles
│   └── js/
│       ├── script.js           # Main JavaScript
│       ├── products.js         # Products page logic
│       ├── contact.js          # Contact form logic
│       ├── innovation.js       # Innovation animations
│       └── careers.js          # Careers page logic
├── views/
│   ├── index.ejs               # Home page
│   ├── products.ejs            # Products page
│   ├── about.ejs               # About page
│   ├── contact.ejs             # Contact page
│   ├── innovation.ejs          # Innovation page
│   ├── careers.ejs             # Careers page
│   └── 404.ejs                 # Error page
├── server.js                   # Express server setup
├── package.json                # Dependencies
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/logesh360/qualcomm-company-website.git
cd qualcomm-company-website
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- express
- ejs
- body-parser
- cors
- nodemon (for development)

### Step 3: Start the Server

**For Production:**
```bash
npm start
```

**For Development (with auto-reload):**
```bash
npm run dev
```

### Step 4: Open in Browser

Navigate to `http://localhost:3000` in your web browser.

## 🎮 Usage

### Navigation
The website has a fixed navigation bar at the top with links to all pages:
- Home
- Products
- About
- Innovation
- Careers
- Contact

### Interactive Elements

**Contact Form**
- Fill in name, email, and message
- Submit to send a message
- Form validation included
- Success/error messages displayed

**Newsletter Subscription**
- Subscribe to newsletter with email
- Validation for email format
- Confirmation message on success

**Job Applications**
- Click "Apply Now" on any job listing
- Fill in application modal
- Submit application for review
- Feedback message after submission

## 🎨 Customization

### Change Colors
Edit color values in `public/css/style.css`:
```css
/* Update these colors */
--primary-color: #0066cc;      /* Blue */
--gradient-start: #667eea;     /* Purple */
--gradient-end: #764ba2;       /* Dark Purple */
```

### Update Company Information
Edit in `views/contact.ejs` and `views/about.ejs`:
```html
<!-- Update company details -->
<p>Qualcomm Incorporated<br>
5775 Morehouse Drive<br>
San Diego, CA 92121</p>
```

### Modify Job Listings
Edit job cards in `views/careers.ejs` to add/remove/update positions.

### Add New Pages
1. Create new `.ejs` file in `views/`
2. Add CSS file in `public/css/` if needed
3. Add route in `server.js`:
```javascript
app.get('/newpage', (req, res) => {
  res.render('newpage');
});
```
4. Add navigation link in all `.ejs` files

## 🔗 API Endpoints

### POST /api/contact
Submit contact form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I have a question..."
}
```

### POST /api/subscribe
Subscribe to newsletter
```json
{
  "email": "john@example.com"
}
```

### POST /api/apply
Submit job application
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "position": "Senior Software Engineer",
  "experience": "10 years of experience..."
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎬 Animations

### Implemented Animations
- **Fade-in animations** on page load
- **Slide-in effects** for content
- **Hover effects** on cards and buttons
- **Scroll animations** with Intersection Observer
- **Counter animations** for statistics
- **Smooth transitions** between pages
- **GSAP animations** for advanced effects

## 🚀 Deployment

### Deploy to Heroku

1. **Install Heroku CLI**
```bash
npm install -g heroku
```

2. **Login to Heroku**
```bash
heroku login
```

3. **Create Heroku App**
```bash
heroku create your-app-name
```

4. **Deploy**
```bash
git push heroku main
```

5. **View Live Site**
```bash
heroku open
```

### Deploy to Netlify (Frontend Only)

1. Build static files
2. Push to GitHub
3. Connect repository to Netlify
4. Deploy from main branch

### Deploy to AWS, Azure, or Google Cloud

Following their respective documentation for Node.js deployment.

## 🔒 Security Features

- Input validation on all forms
- CORS protection
- Environment variable support for sensitive data
- XSS protection through template escaping

## 📈 Performance Optimization

- Minified CSS and JavaScript
- Optimized images and assets
- Lazy loading for images
- Efficient animation handling
- Mobile-first responsive design

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in server.js
const PORT = process.env.PORT || 3001;
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force
npm install
```

### Animations Not Working
- Ensure GSAP CDN is loaded
- Check browser console for errors
- Verify CSS animations are not disabled

## 📚 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [EJS Documentation](https://ejs.co/)
- [GSAP Animation Library](https://greensock.com/gsap/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 👨‍💻 Development Tips

1. **Use Chrome DevTools** for debugging
2. **Test on multiple devices** before deployment
3. **Check console for errors** during development
4. **Use `npm run dev`** for faster development with auto-reload
5. **Test forms** before deploying to production

## 📝 Future Enhancements

- [ ] Database integration for storing inquiries
- [ ] Email notifications for form submissions
- [ ] User authentication system
- [ ] Blog section with CMS
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Admin panel for content management

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

ISC License - Feel free to use this project for personal or commercial purposes.

## 👤 Author

Created by [logesh360](https://github.com/logesh360)

## 📞 Support

For issues or questions:
1. Check the [GitHub Issues](https://github.com/logesh360/qualcomm-company-website/issues)
2. Create a new issue if your problem isn't listed
3. Include screenshots and error messages for better assistance

## 🌟 Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

---

**Happy coding!** 🎉
