import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BarChart3, Lock, ShoppingBag, Banknote, Car, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const PhoneMockup = () => {
    const { t } = useTranslation();

    const transactions = [
        { color: '#FDE68A', iconBg: '#fef3c7', title: t('phone.grocery'), amount: '-$45.00', positive: false, icon: <ShoppingBag size={16} color="#92400e" /> },
        { color: '#A7F3D0', iconBg: '#d1fae5', title: t('phone.salary'), amount: '+$3,200', positive: true, icon: <Banknote size={16} color="#065f46" /> },
        { color: '#BAE6FD', iconBg: '#e0f2fe', title: t('phone.uber'), amount: '-$12.50', positive: false, icon: <Car size={16} color="#075985" /> },
    ];

    return (
        <div className="phone-perspective">
            <motion.div 
                className="phone-wrapper"
                animate={{
                    y: [0, -12, 0],
                    rotateX: [0, 3, 0],
                    rotateY: [0, -3, 0],
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
                    padding: '16px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    color: '#fff',
                    fontFamily: 'Inter, sans-serif',
                    overflow: 'hidden',
                }}>
                    {/* Status bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 4px 0', fontSize: '10px', opacity: 0.5 }}>
                        <span>9:41</span>
                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <div style={{ width: '14px', height: '8px', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '2px', position: 'relative' }}>
                                <div style={{ width: '70%', height: '100%', background: '#4ADE80', borderRadius: '1px' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 4px' }}>
                        <div style={{ 
                            width: '32px', height: '32px', borderRadius: '50%', 
                            background: 'linear-gradient(135deg, #FF9966, #FF5E62)',
                            flexShrink: 0,
                        }}></div>
                        <div>
                            <div style={{ fontSize: '11px', opacity: 0.6, lineHeight: 1.2 }}>{t('phone.hello')}</div>
                            <div style={{ fontWeight: 600, fontSize: '14px', lineHeight: 1.3 }}>User</div>
                        </div>
                    </div>

                    {/* Balance Card */}
                    <motion.div 
                        animate={{ scale: [1, 1.01, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            background: 'linear-gradient(135deg, #6C5DD3, #4834a8)',
                            padding: '16px',
                            borderRadius: '16px',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Decorative circle */}
                        <div style={{
                            position: 'absolute', top: '-20px', right: '-20px',
                            width: '80px', height: '80px', borderRadius: '50%',
                            background: 'rgba(255,255,255,0.08)',
                        }}></div>
                        <div style={{
                            position: 'absolute', bottom: '-30px', left: '-10px',
                            width: '60px', height: '60px', borderRadius: '50%',
                            background: 'rgba(255,255,255,0.05)',
                        }}></div>

                        <span style={{ fontSize: '10px', opacity: 0.7, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            {t('phone.balance')}
                        </span>
                        <h3 style={{ fontSize: '24px', margin: '4px 0 10px', fontWeight: 700, letterSpacing: '-0.5px' }}>
                            $12,450<span style={{ fontSize: '16px', opacity: 0.6 }}>.00</span>
                        </h3>
                        <div style={{ display: 'flex', gap: '14px', fontSize: '12px', fontWeight: 500 }}>
                            <span style={{ color: '#4ADE80', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                <ArrowUpRight size={12} /> $2,400
                            </span>
                            <span style={{ color: '#F87171', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                <ArrowDownRight size={12} /> $850
                            </span>
                        </div>
                    </motion.div>

                    {/* Mini Chart Area */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(255,255,255,0.04)', borderRadius: '12px',
                        padding: '10px 12px',
                    }}>
                        <TrendingUp size={16} color="#4ADE80" />
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '10px', opacity: 0.5 }}>This month</div>
                            <div style={{ fontSize: '12px', fontWeight: 600 }}>+18.5%</div>
                        </div>
                        {/* Mini bar chart */}
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '24px' }}>
                            {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: i * 0.1 + 0.5, duration: 0.4 }}
                                    style={{
                                        width: '4px',
                                        borderRadius: '2px',
                                        background: i === 5 ? '#4ADE80' : 'rgba(108, 93, 211, 0.5)',
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Transactions */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                        {transactions.map((item, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15 + 0.8 }}
                                style={{
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    background: 'rgba(255, 255, 255, 0.03)', 
                                    padding: '10px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.04)',
                                }}
                            >
                                <div style={{ 
                                    width: '32px', height: '32px', borderRadius: '10px', 
                                    marginRight: '10px', background: item.iconBg,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    {item.icon}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ fontWeight: 500, fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {item.title}
                                    </div>
                                </div>
                                <div style={{ 
                                    fontWeight: 600, fontSize: '12px', 
                                    color: item.positive ? '#4ADE80' : 'rgba(255,255,255,0.8)',
                                    flexShrink: 0, marginLeft: '8px',
                                }}>
                                    {item.amount}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom nav indicator */}
                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '4px' }}>
                        <div style={{ width: '40%', height: '3px', borderRadius: '3px', background: 'rgba(255,255,255,0.15)' }}></div>
                    </div>
                </div>
            </motion.div>
            
            {/* Floating Cards */}
            <motion.div 
                className="floating-card"
                style={{ top: '12%', right: '-35px' }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
                <div className="icon" style={{ color: '#fff' }}><BarChart3 size={20} /></div>
                <div className="text">
                    <strong>{t('phone.analytics')}</strong>
                    <span>Smart insights</span>
                </div>
            </motion.div>

            <motion.div 
                className="floating-card"
                style={{ bottom: '18%', left: '-35px' }}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
            >
                <div className="icon" style={{ color: '#fff' }}><Lock size={20} /></div>
                <div className="text">
                    <strong>{t('phone.secure')}</strong>
                    <span>Biometric lock</span>
                </div>
            </motion.div>
        </div>
    );
};

export default PhoneMockup;
