import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, Clock, Users, Video, Phone } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export function BookDemo() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    meetingType: "",
    message: ""
  });

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all required fields
    if (!formData.name || !formData.email || !formData.organization || !formData.role || !formData.meetingType || !selectedDate || !selectedTime) {
      setStatus("❌ Please fill in all required fields.");
      return;
    }

    if (!form.current) return;

    emailjs
      .sendForm("service_bjblaqv", "template_05uueck", form.current, {
        publicKey: "nm0NORrFIllA23hGZ",
      })
      .then(
        () => {
          setStatus("✅ Demo call scheduled successfully! We'll send you a confirmation email shortly.");
          form.current?.reset();
          setFormData({
            name: "",
            email: "",
            organization: "",
            role: "",
            meetingType: "",
            message: ""
          });
          setSelectedDate("");
          setSelectedTime("");
        },
        (error) => {
          setStatus("❌ Failed to schedule demo. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="book-demo" className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Book a <span className="text-primary">Demo Call</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schedule a personalized demo and discover how our 
              dashboards can transform your educational institution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Demo Benefits */}
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Video className="w-5 h-5 text-primary" />
                    </div>
                    What You'll See
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      Live walkthrough of our dashboard's features and capabilities
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                      Real-time analytics and reporting features
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      Custom integration possibilities for your institutional needs
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      Q&A session with our team
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    Demo Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Duration: 30-45 minutes</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Video className="w-4 h-4" />
                      <span>Format: Video call or phone</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>Attendees: Up to 5 people</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Demo</CardTitle>
                <CardDescription>
                  Fill in your details and pick a convenient time for your personalized demo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="user_name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="user_email"
                        type="email"
                        placeholder="your.email@school.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organization">School/Organization</Label>
                      <Input
                        id="organization"
                        name="user_school"
                        placeholder="Your institution name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role</Label>
                      <Select 
                        value={formData.role} 
                        onValueChange={(value) => setFormData({ ...formData, role: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="School Administrator">School Administrator</SelectItem>
                          <SelectItem value="Principal/Vice Principal">Principal/Vice Principal</SelectItem>
                          <SelectItem value="Teacher">Teacher</SelectItem>
                          <SelectItem value="IT Manager">IT Manager</SelectItem>
                          <SelectItem value="Superintendent">Superintendent</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="meeting-type">Preferred Meeting Type</Label>
                    <Select 
                      value={formData.meetingType} 
                      onValueChange={(value) => setFormData({ ...formData, meetingType: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose meeting format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Video Call (Online)">Video Call (Online)</SelectItem>
                        <SelectItem value="Phone Call">Phone Call</SelectItem>
                        <SelectItem value="In-Person (Offline)">In-Person (Offline)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        name="meeting_date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your specific needs, number of students, current challenges, etc."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                    
                    {/* Hidden fields for EmailJS */}
                    <input type="hidden" name="user_role" value={formData.role} />
                    <input type="hidden" name="meeting_type" value={formData.meetingType} />
                    <input type="hidden" name="meeting_time" value={selectedTime} />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Demo Call
                  </Button>
                  
                  {status && (
                    <div className="mt-4 p-4 rounded-lg bg-muted text-center">
                      <p className="text-sm">{status}</p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Alternative */}

        </div>
      </div>
    </section>
  );
}