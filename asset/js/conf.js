
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#36c0b2',
                secondary: '#36c0b2',
                accent: '#F59E0B',
                dark: '#111827',
                light: '#F8FAFC',
                'gray-750': '#374151'
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif']
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-in-out',
                'float': 'float 6s ease-in-out infinite',
                'slide-down': 'slideDown 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        }
    }
}
