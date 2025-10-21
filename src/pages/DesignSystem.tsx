import { FC } from 'react';
import { Palette, Component, Type, Layout } from 'lucide-react';

const DesignSystem: FC = () => {
  const colorPalette = [
    {
      category: 'Primary Colors',
      description: 'Deep Purple - Unique & Creative',
      colors: [
        { name: 'Deep Purple', value: '#7C3AED', usage: 'Primary actions, links, focus states' },
        { name: 'Light Purple', value: '#8B5CF6', usage: 'Hover states, secondary elements' },
        { name: 'Dark Purple', value: '#6D28D9', usage: 'Active states, pressed elements' }
      ]
    },
    {
      category: 'Secondary Colors',
      description: 'Cyan - Fresh & Modern',
      colors: [
        { name: 'Cyan', value: '#06B6D4', usage: 'Success states, progress indicators' },
        { name: 'Light Cyan', value: '#22D3EE', usage: 'Accent elements, highlights' },
        { name: 'Dark Cyan', value: '#0891B2', usage: 'Depth, emphasis' }
      ]
    },
    {
      category: 'Accent Colors',
      description: 'Amber - Warm & Playful',
      colors: [
        { name: 'Amber', value: '#F59E0B', usage: 'Innovation, special features' },
        { name: 'Light Amber', value: '#FBBF24', usage: 'Highlights, special elements' },
        { name: 'Dark Amber', value: '#D97706', usage: 'Emphasis, important actions' }
      ]
    },
    {
      category: 'Youth Colors',
      description: 'Unique & Fun Colors',
      colors: [
        { name: 'Deep Purple', value: '#7C3AED', usage: 'Unique, creative elements' },
        { name: 'Cyan', value: '#06B6D4', usage: 'Fresh, modern features' },
        { name: 'Amber', value: '#F59E0B', usage: 'Warm, playful activities' },
        { name: 'Emerald', value: '#10B981', usage: 'Success, growth' },
        { name: 'Rose', value: '#F43F5E', usage: 'Fun, energetic elements' }
      ]
    },
    {
      category: 'Status Colors',
      description: 'Vibrant & Positive',
      colors: [
        { name: 'Success', value: '#00C896', usage: 'Success messages, completed states' },
        { name: 'Warning', value: '#FFD700', usage: 'Caution, pending states' },
        { name: 'Error', value: '#FF4081', usage: 'Errors, critical actions' },
        { name: 'Info', value: '#FF6B35', usage: 'Information, tips' }
      ]
    },
    {
      category: 'Neutral Colors',
      description: 'Comprehensive Gray Scale',
      colors: [
        { name: 'Gray 50', value: '#FAFAFA', usage: 'Backgrounds, subtle borders' },
        { name: 'Gray 100', value: '#F5F5F5', usage: 'Light backgrounds' },
        { name: 'Gray 200', value: '#E5E5E5', usage: 'Borders, dividers' },
        { name: 'Gray 300', value: '#D4D4D4', usage: 'Disabled elements' },
        { name: 'Gray 400', value: '#A3A3A3', usage: 'Placeholder text' },
        { name: 'Gray 500', value: '#737373', usage: 'Secondary text' },
        { name: 'Gray 600', value: '#525252', usage: 'Primary text' },
        { name: 'Gray 700', value: '#404040', usage: 'Dark text' },
        { name: 'Gray 800', value: '#262626', usage: 'Very dark text' },
        { name: 'Gray 900', value: '#171717', usage: 'Darkest text' }
      ]
    }
  ];

  const components = [
    {
      name: 'Buttons',
      description: 'Primary, secondary, and outline button styles',
      examples: [
        { type: 'Primary', className: 'btn-primary', text: 'Primary Button' },
        { type: 'Secondary', className: 'btn-secondary', text: 'Secondary Button' },
        { type: 'Outline', className: 'btn-outline', text: 'Outline Button' },
        { type: 'Text', className: 'btn-text', text: 'Text Button' }
      ]
    },
    {
      name: 'Cards',
      description: 'Stat cards, course cards, and content containers',
      examples: [
        { type: 'Stat Card', className: 'stat-card blue', text: 'Stat Card Example' },
        { type: 'Course Card', className: 'course-card blue', text: 'Course Card Example' },
        { type: 'Section Card', className: 'courses-section', text: 'Section Container' }
      ]
    },
    {
      name: 'Form Elements',
      description: 'Input fields, selects, and form controls',
      examples: [
        { type: 'Input', className: 'search-input', text: 'Search Input' },
        { type: 'Select', className: 'filter-select', text: 'Filter Select' },
        { type: 'Checkbox', className: 'checkbox', text: 'Checkbox' }
      ]
    },
    {
      name: 'Navigation',
      description: 'Sidebar navigation and header elements',
      examples: [
        { type: 'Nav Link', className: 'nav-link active', text: 'Active Nav Link' },
        { type: 'Nav Link', className: 'nav-link', text: 'Nav Link' },
        { type: 'Header', className: 'header', text: 'Header Element' }
      ]
    }
  ];

  const typography = [
    { name: 'Heading 1', className: 'text-4xl font-bold', text: 'Heading 1 - Main Titles' },
    { name: 'Heading 2', className: 'text-3xl font-semibold', text: 'Heading 2 - Section Titles' },
    { name: 'Heading 3', className: 'text-2xl font-semibold', text: 'Heading 3 - Subsection Titles' },
    { name: 'Body Large', className: 'text-lg', text: 'Body Large - Important content' },
    { name: 'Body', className: 'text-base', text: 'Body - Regular content' },
    { name: 'Body Small', className: 'text-sm', text: 'Body Small - Secondary content' },
    { name: 'Caption', className: 'text-xs', text: 'Caption - Small details' }
  ];

  const spacing = [
    { name: 'XS', value: '0.25rem', className: 'w-1 h-1', description: '4px - Fine details' },
    { name: 'SM', value: '0.5rem', className: 'w-2 h-2', description: '8px - Small gaps' },
    { name: 'MD', value: '1rem', className: 'w-4 h-4', description: '16px - Standard spacing' },
    { name: 'LG', value: '1.5rem', className: 'w-6 h-6', description: '24px - Large spacing' },
    { name: 'XL', value: '2rem', className: 'w-8 h-8', description: '32px - Extra large spacing' },
    { name: '2XL', value: '3rem', className: 'w-12 h-12', description: '48px - Section spacing' }
  ];

  return (
    <div className="design-system-page">
      <div className="page-header">
        <div className="header-content">
          <h1>ICAN Design System</h1>
          <p>Vibrant Youth Platform - Bright, Energetic & Exciting</p>
        </div>
      </div>

      <div className="design-system-content">
        {/* Color Palette Section */}
        <section className="design-section">
          <div className="section-header">
            <Palette size={24} />
            <h2>Color Palette</h2>
            <p>Youth-friendly color system designed for students from elementary to university</p>
          </div>
          
          <div className="color-palette">
            {colorPalette.map((category, index) => (
              <div key={index} className="color-category">
                <div className="category-header">
                  <h3>{category.category}</h3>
                  <p>{category.description}</p>
                </div>
                <div className="color-grid">
                  {category.colors.map((color, colorIndex) => (
                    <div key={colorIndex} className="color-item">
                      <div 
                        className="color-swatch" 
                        style={{ backgroundColor: color.value }}
                      ></div>
                      <div className="color-info">
                        <h4>{color.name}</h4>
                        <code>{color.value}</code>
                        <p>{color.usage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="design-section">
          <div className="section-header">
            <Type size={24} />
            <h2>Typography</h2>
            <p>Font sizes and weights for consistent text hierarchy</p>
          </div>
          
          <div className="typography-showcase">
            {typography.map((type, index) => (
              <div key={index} className="typography-item">
                <div className="type-spec">
                  <span className="type-name">{type.name}</span>
                  <code className="type-class">{type.className}</code>
                </div>
                <div className={`type-example ${type.className}`}>
                  {type.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Components Section */}
        <section className="design-section">
          <div className="section-header">
            <Component size={24} />
            <h2>Components</h2>
            <p>Reusable UI components used throughout the platform</p>
          </div>
          
          <div className="components-showcase">
            {components.map((component, index) => (
              <div key={index} className="component-category">
                <div className="component-header">
                  <h3>{component.name}</h3>
                  <p>{component.description}</p>
                </div>
                <div className="component-examples">
                  {component.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="component-example">
                      <span className="example-label">{example.type}</span>
                      <div className={`example-element ${example.className}`}>
                        {example.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing Section */}
        <section className="design-section">
          <div className="section-header">
            <Layout size={24} />
            <h2>Spacing Scale</h2>
            <p>Consistent spacing system for layout and components</p>
          </div>
          
          <div className="spacing-showcase">
            {spacing.map((space, index) => (
              <div key={index} className="spacing-item">
                <div className="spacing-visual">
                  <div 
                    className={`spacing-box ${space.className}`}
                    style={{ backgroundColor: 'var(--primary-color)' }}
                  ></div>
                </div>
                <div className="spacing-info">
                  <h4>{space.name}</h4>
                  <code>{space.value}</code>
                  <p>{space.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="design-section">
          <div className="section-header">
            <h2>Usage Guidelines</h2>
            <p>Best practices for implementing the design system</p>
          </div>
          
          <div className="guidelines-grid">
            <div className="guideline-card">
              <h3>Color Usage</h3>
              <ul>
                <li>Use Vibrant Orange as primary - energetic and exciting</li>
                <li>Use Mint Green for success states and progress</li>
                <li>Use Hot Pink for creativity and innovation</li>
                <li>Use Gold for achievements and celebrations</li>
                <li>Bright colors create excitement and engagement</li>
              </ul>
            </div>
            
            <div className="guideline-card">
              <h3>Component Guidelines</h3>
              <ul>
                <li>Use consistent spacing from the spacing scale</li>
                <li>Apply glass morphism effects for modern look</li>
                <li>Use subtle shadows and transitions</li>
                <li>Maintain consistent border radius</li>
              </ul>
            </div>
            
            <div className="guideline-card">
              <h3>Typography Rules</h3>
              <ul>
                <li>Use Inter font family for consistency</li>
                <li>Maintain proper hierarchy with font sizes</li>
                <li>Ensure sufficient line height for readability</li>
                <li>Use appropriate font weights for emphasis</li>
              </ul>
            </div>
            
            <div className="guideline-card">
              <h3>Accessibility</h3>
              <ul>
                <li>Ensure WCAG AA compliance</li>
                <li>Use sufficient color contrast ratios</li>
                <li>Provide focus indicators for keyboard navigation</li>
                <li>Include alt text for images and icons</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignSystem;
