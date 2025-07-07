import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Youssef Elfaramawy";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/username",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/username",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/username",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send size={20} />
                Send Me a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground placeholder:text-muted-foreground"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground placeholder:text-muted-foreground"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground placeholder:text-muted-foreground"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground placeholder:text-muted-foreground"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle
                    size={48}
                    className="mx-auto text-green-500 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.link}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <item.icon
                      size={20}
                      className="text-blue-600 dark:text-blue-400"
                    />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-50">
                        {item.label}
                      </div>
                      <div className="text-slate-600 dark:text-slate-300">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>
                  Follow me on social media for updates and insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg border border-border hover:shadow-md hover:bg-accent/50 transition-all duration-200 ${social.color}`}
                      title={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock size={20} />
                  Current Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-slate-900 dark:text-slate-50">
                    Available for new projects
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  I typically respond to messages within 24 hours. For urgent
                  matters, feel free to call or send a message on LinkedIn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
