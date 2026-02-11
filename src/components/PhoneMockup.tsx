import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BarChart3, Lock, ShoppingBag, Banknote, Car, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const PhoneMockup = () => {
    const { t } = useTranslation();

    const transactions = [
        { iconBg: '#fef3c7', title: t('phone.grocery'), amount: '-$45', positive: false, icon: <ShoppingBag size={14} color="#92400e" /> },
        { iconBg: '#d1fae5', title: t('phone.salary'), amount: '+$3,200', positive: true, icon: <Banknote size={14} color="#065f46" /> },
        { iconBg: '#e0f2fe', title: t('phone.uber'), amount: '-$12', positive: false, icon: <Car size={14} color="#075985" /> },
    ];

    return (
        <div className="phone-perspective">
            <motion.div 
                className="phone-wrapper"
                animate={{
                    y: [0, -10, 0],
                    rotateX: [0, 2, 0],
                    rotateY: [0, -2, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, #12121f 0%, #1a1a2e 100%)',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    color: '#fff',
                    fontFamily: 'Inter, sans-serif',
                    overflow: 'hidden',
                    fontSize: '12px',
                }}>
                    {/* Status bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 2px 0', fontSize: '9px', opacity: 0.4 }}>
                        <span>9:41</span>
                        <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                            <div style={{ width: '12px', height: '7px', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '2px', overflow: 'hidden' }}>
                                <div style={{ width: '70%', height: '100%', background: '#4ADE80' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 2px' }}>
                        <div style={{ 
                            width: '28px', height: '28px', borderRadius: '50%', 
                            background: 'linear-gradient(135deg, #FF9966, #FF5E62)',
                            flexShrink: 0,
                        }}></div>
                        <div>
                            <div style={{ fontSize: '9px', opacity: 0.5, lineHeight: 1.1 }}>{t('phone.hello')}</div>
                            <div style={{ fontWeight: 600, fontSize: '12px', lineHeight: 1.2 }}>User</div>
                        </div>
                    </div>

                    {/* Balance Card */}
                    <motion.div 
                        animate={{ scale: [1, 1.01, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            background: 'linear-gradient(135deg, #6C5DD3, #4834a8)',
                            padding: '12px',
                            borderRadius: '14px',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <div style={{
                            position: 'absolute', top: '-15px', right: '-15px',
                            width: '60px', height: '60px', borderRadius: '50%',
                            background: 'rgba(255,255,255,0.08)',
                        }}></div>

                        <span style={{ fontSize: '9px', opacity: 0.7, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            {t('phone.balance')}
                        </span>
                        <h3 style={{ fontSize: '22px', margin: '2px 0 6px', fontWeight: 700, letterSpacing: '-0.5px' }}>
                            $12,450<span style={{ fontSize: '14px', opacity: 0.5 }}>.00</span>
                        </h3>
                        <div style={{ display: 'flex', gap: '12px', fontSize: '10px', fontWeight: 500 }}>
                            <span style={{ color: '#4ADE80', display: 'flex', alignItems: 'center', gap: '2px' }}>
                                <ArrowUpRight size={10} /> $2,400
                            </span>
                            <span style={{ color: '#F87171', display: 'flex', alignItems: 'center', gap: '2px' }}>
                                <ArrowDownRight size={10} /> $850
                            </span>
                        </div>
                    </motion.div>

                    {/* Mini Chart */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        background: 'rgba(255,255,255,0.04)', borderRadius: '10px',
                        padding: '8px 10px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '20px' }}>
                            {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: i * 0.1 + 0.5, duration: 0.4 }}
                                    style={{
                                        width: '3px',
                                        borderRadius: '2px',
                                        background: i === 5 ? '#4ADE80' : 'rgba(108, 93, 211, 0.5)',
                                    }}
                                />
                            ))}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '11px', fontWeight: 600, color: '#4ADE80' }}>+18.5%</div>
                            <div style={{ fontSize: '8px', opacity: 0.4 }}>This month</div>
                        </div>
                    </div>

                    {/* Transactions */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                        {transactions.map((item, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15 + 0.8 }}
                                style={{
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    background: 'rgba(255, 255, 255, 0.03)', 
                                    padding: '8px',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(255,255,255,0.03)',
                                }}
                            >
                                <div style={{ 
                                    width: '28px', height: '28px', borderRadius: '8px', 
                                    marginRight: '8px', background: item.iconBg,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    {item.icon}
                                </div>
                                <div style={{ flex: 1, fontSize: '11px', fontWeight: 500 }}>
                                    {item.title}
                                </div>
                                <div style={{ 
                                    fontWeight: 600, fontSize: '11px', 
                                    color: item.positive ? '#4ADE80' : 'rgba(255,255,255,0.7)',
                                    flexShrink: 0,
                                }}>
                                    {item.amount}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom nav */}
                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '2px' }}>
                        <div style={{ width: '36%', height: '3px', borderRadius: '3px', background: 'rgba(255,255,255,0.12)' }}></div>
                    </div>
                </div>
            </motion.div>
            
            {/* Floating Cards */}
            <motion.div 
                className="floating-card"
                style={{ top: '12%', right: '-30px' }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
                <div className="icon" style={{ color: '#fff' }}><BarChart3 size={18} /></div>
                <div className="text">
                    <strong>{t('phone.analytics')}</strong>
                    <span>Smart insights</span>
                </div>
            </motion.div>

            <motion.div 
                className="floating-card"
                style={{ bottom: '18%', left: '-30px' }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
            >
                <div className="icon" style={{ color: '#fff' }}><Lock size={18} /></div>
                <div className="text">
                    <strong>{t('phone.secure')}</strong>
                    <span>Biometric lock</span>
                </div>
            </motion.div>
        </div>
    );
};

export default PhoneMockup;
