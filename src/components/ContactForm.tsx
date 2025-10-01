import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  selectedService: string;
  problem: string;
  additionalInfo: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  selectedService?: string;
  problem?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    selectedService: '',
    problem: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    { value: 'chatbots', label: 'Chatbots', description: 'Intelligent customer support and lead qualification bots' },
    { value: 'email-outreach', label: 'Email Outreach', description: 'Automated personalized email campaigns' },
    { value: 'phone-callers', label: 'Automated Phone Callers', description: 'AI-powered appointment setting and follow-ups' },
    { value: 'social-media', label: 'Social Media Automation', description: 'Automated posting and engagement management' },
    { value: 'website-building', label: 'AI-Powered Website Building', description: 'Modern websites built entirely by AI' },
    { value: 'integrations', label: 'Custom Integrations', description: 'Connect AI with your existing tools and CRMs' },
    { value: 'voice-assistants', label: 'Voice Assistants', description: 'AI voice bots for calls and customer service' },
    { value: 'lead-qualification', label: 'Lead Qualification & CRM Automation', description: 'Automated lead capture and follow-up systems' }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service validation
    if (!formData.selectedService) {
      newErrors.selectedService = 'Please select a service';
    }

    // Problem validation
    if (!formData.problem.trim()) {
      newErrors.problem = 'Please describe the problem you\'re looking to solve';
    } else if (formData.problem.trim().length < 10) {
      newErrors.problem = 'Please provide at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (!supabase) {
        throw new Error('Database connection not configured');
      }

      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            selected_service: formData.selectedService,
            problem: formData.problem.trim(),
            additional_info: formData.additionalInfo.trim()
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw new Error('Failed to submit form. Please try again.');
      }

      console.log('Form submitted successfully:', data);
      setIsSubmitted(true);

      setFormData({
        name: '',
        email: '',
        selectedService: '',
        problem: '',
        additionalInfo: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-6">
              We've received your request for a free AI consultation. Our team will review your information and contact you within 24 hours.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-sm text-blue-800">
                <strong>What's Next?</strong><br />
                1. We'll analyze your current processes<br />
                2. Identify automation opportunities<br />
                3. Present a custom AI strategy for your business
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free AI Consultation
          </h2>
          <p className="text-xl text-white">
            Let us show you how AI can transform your business operations and save you thousands per month.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="selectedService" className="block text-sm font-medium text-gray-700 mb-2">
                Service of Interest *
              </label>
              <select
                id="selectedService"
                name="selectedService"
                value={formData.selectedService}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.selectedService ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label} - {service.description}
                  </option>
                ))}
              </select>
              {errors.selectedService && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.selectedService}
                </p>
              )}
            </div>

            {/* Problem Field */}
            <div>
              <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
                What problem are you looking to solve? *
              </label>
              <textarea
                id="problem"
                name="problem"
                value={formData.problem}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
                  errors.problem ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Describe the challenges you're facing and how AI automation could help your business..."
              />
              {errors.problem && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.problem}
                </p>
              )}
            </div>

            {/* Additional Information Field */}
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                placeholder="Any additional details about your business, current tools, or specific requirements..."
              />
            </div>

            {/* Privacy Notice */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Privacy Notice:</strong> We respect your privacy and will never share your information with third parties. 
                Your data is used solely to provide you with a personalized AI consultation and strategy recommendations.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Send className="mr-2 w-5 h-5" />
                  Get Started
                </>
              )}
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600 mb-2">
              Questions? Contact us directly:
            </p>
            <p className="text-sm text-blue-600 font-medium">
              support@eliteaiautomation.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;