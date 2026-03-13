import re

fixes_applied = []

# ============================================================
# FIX 1: SG EVGuide - EEAI name and amount wrong
# "Enhanced EV Incentive for Accessibility" is wrong name
# Correct name: "EV Early Adoption Incentive (EEAI)"
# Amount was $25,000 - correct is 45% ARF rebate capped at $15,000 for 2025,
# extended to 31 December 2026 (cap drops to $7,500 in 2026)
# ============================================================
path = 'src/pages/singapore/EVGuide.jsx'
txt = open(path).read()
orig = txt

txt = txt.replace(
    '"EEAI incentive"',
    '"EV Early Adoption Incentive (EEAI)"'
)

txt = txt.replace(
    'The Enhanced EV Incentive for Accessibility provides rebates of up to SGD $25,000 on EV purchase (reducing ARF). Leasing companies benefit from related schemes that flow through to competitive lease pricing.',
    'The EV Early Adoption Incentive (EEAI) provides a 45% rebate on the Additional Registration Fee (ARF), capped at SGD $15,000 for 2025 registrations (cap reduces to $7,500 in 2026). The scheme has been extended to 31 December 2026 and will not be renewed thereafter. This significantly reduces upfront EV purchase costs. Leasing companies benefit from related schemes that flow through to competitive lease pricing.'
)

if txt != orig:
    open(path, 'w').write(txt)
    fixes_applied.append('SG EVGuide: EEAI name corrected and amount updated to $15,000 cap (2025), extended to Dec 2026')
else:
    matches = re.findall(r'.{0,30}EEAI.{0,60}', orig)
    print('SG EVGuide EEAI context:', matches[:3])
    matches2 = re.findall(r'.{0,30}Enhanced.{0,60}', orig)
    print('SG EVGuide Enhanced context:', matches2[:3])

# ============================================================
# FIX 2: HK EVGuide - FRT concession amounts wrong
# Old (wrong): "$97,500 under the One-for-One Replacement Scheme"
# Correct: One-for-One = $172,500, General = $58,500, until 31 March 2026
# ============================================================
path = 'src/pages/hongkong/EVGuide.jsx'
txt = open(path).read()
orig = txt

# Fix the concession description
txt = txt.replace(
    'The current arrangement provides a concession of up to <strong>HKD $97,500</strong> under the One-for-One Replacement Scheme.',
    'The current arrangement (extended to 31 March 2026) provides two tiers: under the <strong>One-for-One Replacement Scheme</strong> (scrapping an old petrol car), eligible buyers receive an FRT concession of up to <strong>HKD $172,500</strong> on EVs priced at or below HK$500,000. For general new EV purchases without a trade-in, the concession is up to <strong>HKD $58,500</strong>. EVs priced above HK$500,000 do not qualify.'
)

if txt != orig:
    open(path, 'w').write(txt)
    fixes_applied.append('HK EVGuide: FRT concession corrected to $172,500 (OFORS) / $58,500 (general), expiry 31 March 2026')
else:
    matches = re.findall(r'.{0,30}97,500.{0,60}', orig)
    print('HK EVGuide $97,500 context:', matches[:3])
    matches2 = re.findall(r'.{0,30}concession.{0,60}', orig, re.I)
    print('HK EVGuide concession context:', matches2[:3])

print('\n=== FIXES APPLIED ===')
for f in fixes_applied:
    print(' -', f)
print('Total: {} fixes'.format(len(fixes_applied)))
