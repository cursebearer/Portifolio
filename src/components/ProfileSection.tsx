import Image from 'next/image'

export function ProfileSection() {
  return (
    <section className="mb-12 flex items-center space-x-6">
      <div className="relative w-32 h-32 rounded-full overflow-hidden">
        <Image
          src="/images/user.jpg"
          alt="Profile picture"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Teste</h2>
        <p className="text-muted-foreground">teste</p>
      </div>
    </section>
  )
}