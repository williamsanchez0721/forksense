import Link from 'next/link'
import { motion } from 'framer-motion'

interface NavLinkProps {
    onLinkClick?: () => void;
}

export default function NavLink({ onLinkClick }: NavLinkProps) {
    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        initial: {
            opacity: 0,
            x: -20
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        }
    }

    const handleClick = () => {
        if (onLinkClick) {
            onLinkClick();
        }
    };

    return (
        <motion.nav 
            className="flex flex-col gap-10 text-white text-4xl lg:text-6xl font-bold"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            <motion.div variants={itemVariants}>
                <Link 
                    href="/" 
                    className="hover:text-yellow-400 transition-colors duration-300 transform hover:translate-x-2 text-start relative group title-font"
                    onClick={handleClick}
                >
                    <span className="relative">
                        INICIO
                        <motion.span 
                            className="absolute -bottom-2 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                        />
                    </span>
                </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
                <Link 
                    href="#blog" 
                    className="hover:text-yellow-400 transition-colors duration-300 transform hover:translate-x-2 text-start relative group title-font"
                    onClick={handleClick}
                >
                    <span className="relative">
                        BLOG
                        <motion.span 
                            className="absolute -bottom-2 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                        />
                    </span>
                </Link>
            </motion.div>
        </motion.nav>
    );
}
