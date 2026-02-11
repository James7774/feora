import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
// Importing icons to replace emojis
import { BarChart3, Lock, ShoppingBag, Banknote, Car } from 'lucide-react';

const PhoneMockup = () => {
    const { t } = useTranslation();

    return (
        <div className="phone-perspective">
            <motion.div 
                className="phone-wrapper"
                animate={{
                    y: [0, -15, 0],
                    rotateX: [0, 5, 0],
                    rotateY: [0, -5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div className="screen" style={{
                    width: '100%',
                    height: '100%',
                    background: '#1a1a24',
                    padding: '24px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    color: '#fff',
                    fontFamily: 'Inter, sans-serif'
                }}>
                    {/* Simulated App UI */}
                    <div className="app-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px', zIndex: 2 }}>
                        <div className="app-avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF9966, #FF5E62)' }}></div>
                        <div className="app-name" style={{ fontWeight: 600, fontSize: '16px' }}>{t('phone.hello')} User</div>
                    </div>

                    <motion.div 
                        className="app-card"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            background: 'linear-gradient(135deg, #6C5DD3, #2A2550)',
                            padding: '24px',
                            borderRadius: '20px',
                            color: '#fff',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                        }}
                    >
                        <span style={{ fontSize: '12px', opacity: 0.8 }}>{t('phone.balance')}</span>
                        <h3 style={{ fontSize: '32px', margin: '8px 0 16px', fontWeight: 700 }}>$12,450.00</h3>
                        <div className="app-stats" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 500 }}>
                            <span style={{ color: '#4ADE80' }}>+$2,400</span>
                            <span style={{ color: '#F87171' }}>-$850</span>
                        </div>
                    </motion.div>

                    <div className="app-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { color: '#FDE68A', title: t('phone.grocery'), amount: '-$45.00', positive: false, icon: <ShoppingBag size={20} color="#854d0e" /> },
                            { color: '#A7F3D0', title: t('phone.salary'), amount: '+$3,200.00', positive: true, icon: <Banknote size={20} color="#065f46" /> },
                            { color: '#BAE6FD', title: t('phone.uber'), amount: '-$12.50', positive: false, icon: <Car size={20} color="#075985" /> }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 + 0.5 }}
                                className="list-item" 
                                style={{
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    background: 'rgba(255, 255, 255, 0.03)', 
                                    padding: '12px', 
                                    borderRadius: '12px'
                                }}
                            >
                                <div className="icon" style={{ 
                                    width: '40px', 
                                    height: '40px', 
                                    borderRadius: '10px', 
                                    marginRight: '12px', 
                                    background: item.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {item.icon}
                                </div>
                                <div className="info" style={{ flex: 1 }}>
                                    <div className="title" style={{ fontWeight: 500, fontSize: '14px' }}>{item.title}</div>
                                </div>
                                <div className="amount" style={{ fontWeight: 600, fontSize: '14px', color: item.positive ? '#4ADE80' : '#fff' }}>{item.amount}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            
            {/* Floating Elements Outside Phone - Using Icons */}
            <motion.div 
                className="floating-card"
                style={{ top: '15%', right: '-40px' }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
                <div className="icon" style={{ color: '#fff' }}><BarChart3 size={24} /></div>
                <div className="text">
                    <strong>{t('phone.analytics')}</strong>
                    <span>Smart insights</span>
                </div>
            </motion.div>

            <motion.div 
                className="floating-card"
                style={{ bottom: '20%', left: '-40px' }}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
            >
                <div className="icon" style={{ color: '#fff' }}><Lock size={24} /></div>
                <div className="text">
                    <strong>{t('phone.secure')}</strong>
                    <span>Biometric lock</span>
                </div>
            </motion.div>
        </div>
    );
};

export default PhoneMockup;
